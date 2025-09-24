import { Input } from "antd";
import { memo, useState } from "react";

export const Search = memo(() => {
  const [title, setTitle] = useState("");
  console.log(title);
  return (
    <div className="container">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="search"
      />
    </div>
  );
});
