// 给所有svg增加一个导出
declare module '*.svg' {
  const content: any;
  export default content;
}
