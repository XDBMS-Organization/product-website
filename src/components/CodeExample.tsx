import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  code: string;
  output?: string;
};

const CodeBlock = ({ code, output }: CodeBlockProps) => (
  <div className="space-y-3 text-sm">
    <SyntaxHighlighter
      language="python"
      style={docco}
      showLineNumbers
      wrapLines
      lineNumberStyle={{
        color: "#999",
        paddingRight: "1em",
        userSelect: "none",
      }}
      customStyle={{
        borderRadius: "0.5rem",
        fontSize: "0.85rem",
        padding: "1rem",
        background: "#fafafa",
      }}
    >
      {code}
    </SyntaxHighlighter>

    {output && (
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase text-zinc-400 tracking-wide">
          Output
        </span>
        <div className="bg-zinc-950 text-zinc-100 rounded-md p-3 font-mono text-xs overflow-x-auto whitespace-pre">
          {output}
        </div>
      </div>
    )}
  </div>
);

const CodeExample = () => {
  return (
    <div className="bg-background/80 backdrop-blur border rounded-2xl shadow-lg p-4 md:p-6">
      <Tabs defaultValue="python" className="w-full">
        <div className="flex justify-end mb-4">
          <TabsList>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="pandas">Pandas + Python</TabsTrigger>
          </TabsList>
        </div>

        {/* Python Example */}
        <TabsContent value="python">
          <CodeBlock
            code={`import xdb

user_id = xdb.create_user("xdb", "xdb@example.com")
group_id = xdb.set_logical_db(user_id, ["postgres://db1", "postgres://db2"])

query_string = "SELECT SUM(amount) AS total_sales FROM sales"

# Run query
result = xdb.query(query_string)

# Identify the predicate execution locations
xdb.explain(user_id, query_string))`
}
            output={`Aggregate[SUM(total_sales)]
└─ UNION ALL [localhost]
   ├─ RemoteOp[postgres://db1]: Aggregate[SUM(amount)]
   └─ RemoteOp[postgres://db2]: Aggregate[SUM(amount)]`}
          />
        </TabsContent>

        {/* Pandas Example */}
        <TabsContent value="pandas">
          <CodeBlock
            code={`import xdb
import pandas as pd

user_id = xdb.create_user("xdb", "xdb@example.com")
group_id = xdb.set_logical_db(user_id, ["postgres://db1", "postgres://db2"])

# db1 has 'name', db2 has 'first_name', 'last_name' (unify them)
df = pd.DataFrame(
    columns=["name", "first_name", "last_name", "country"]
)

conn = xdb.get_conn(group_id)
df = df.to_sql(name="users", con=conn)

# Preview the merged DataFrame
df.show()`}
            output={`     name first_name   last_name country
0   Alice       None        None     USA
1    None        Max  Mustermann      DE
2     Bob       None        None      UK
3    None     Andrea       Costa      IT`}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeExample;
