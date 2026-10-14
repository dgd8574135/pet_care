"use client";
import { useState } from "react";

export function VisitActions() {
  const [status, setStatus] = useState("");
  async function copyAddress() {
    try {
      await navigator.clipboard.writeText("上海市金山区林拓路219号");
      setStatus("地址已复制");
    } catch {
      setStatus("请手动复制：上海市金山区林拓路219号");
    }
  }
  return (
    <>
      {" "}
      <div className="visit-actions">
        <a
          className="btn"
          href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%87%91%E5%B1%B1%E5%8C%BA%E6%9E%97%E6%8B%93%E8%B7%AF219%E5%8F%B7&amp;city=%E4%B8%8A%E6%B5%B7"
          target="_blank"
          rel="noopener"
        >
          打开地图 ↗
        </a>
        <button
          className="copy-address"
          id="copy-address"
          type="button"
          onClick={copyAddress}
        >
          复制地址
        </button>
      </div>
      <div id="copy-status" role="status">
        {status}
      </div>
    </>
  );
}
