interface treeDataItem{
    text:string,
    value:string,
    children?:treeDataItem[]
  }
  
 type treePops = {
  treeData:treeDataItem[],
} & ({
  multiple: true,
  selected: string[],
  onChange: (values: string[]) => void
} | {
  multiple?: false,
  selected: string,
  onChange: (values: string) => void
})