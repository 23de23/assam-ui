import React, { ChangeEventHandler, useRef} from "react"
import { scopedClassMaker } from '../helpers/classes'
import useUpdate, { useToggle } from "../hooks"
import Icon from "../icon/icon"
const sc = scopedClassMaker('assam-tree')

interface Props {
  treeItem: treeDataItem,
  level: number,
  treePops: treePops,
  itemOnChange: (selectedList: string[]) => void
}

const TreeItem: React.FunctionComponent<Props> = (props) => {
  const { treePops, treeItem, level} = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [value,expand,collapse] = useToggle(true)
  const childrenDiv = useRef<HTMLDivElement>(null)
  const transitionReady = useRef(true)


  const fnOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 获取全部子的value
    const childrenValues = treeChildrenValues(props.treeItem)

    if (treePops.multiple === true) {
      if (e.target.checked) {
        props.itemOnChange([...treePops.selected, treeItem.value, ...childrenValues])
      } else {
        childrenValues.push(treeItem.value)
        props.itemOnChange(treePops.selected.filter((i) =>
          childrenValues.indexOf(i) >= 0 ? false : true
        ))
      }
    } else {
      treePops.onChange(treeItem.value === treePops.selected ? '' : treeItem.value)
    }
  }

  const itemOnChange = (selectedList: string[]) => {
    let newSelectedList = selectedList
    if (treePops.multiple === true) {
      const childrenValues = treeChildrenValues(props.treeItem)
      const selectNumber = childrenValues.reduce((a, b) =>
        selectedList.indexOf(b) >= 0 ? a + 1 : a
        , 0)
      if (selectNumber === childrenValues.length) {
        // 相等
        inputRef.current!.indeterminate = false;
        newSelectedList.push(treeItem.value)
      } else if (selectNumber === 0) {
        inputRef.current!.indeterminate = false;
        newSelectedList = selectedList.filter((i) =>
          i !== treeItem.value
        )
      } else {
        // 不全选择
        inputRef.current!.indeterminate = true;
        newSelectedList = selectedList.filter((i) =>
          i !== treeItem.value
        )
      }
    }
    props.itemOnChange(newSelectedList)
  }

  const checkedBoolean = treePops.multiple ? treePops.selected.indexOf(treeItem.value) >= 0 : treeItem.value === treePops.selected

  const unfold = () => {
    if (!transitionReady.current) return
    collapse()
  }
  const fold = () => {
    if (!transitionReady.current) return
    expand()
  }

  useUpdate(value, () => {
    if (childrenDiv.current) {
      if (!transitionReady.current) {
        return
      }
      const transitionDuration = 300 //预留接口用户可传入时间单位ms的number
      childrenDiv.current.style.transitionDuration = transitionDuration + 'ms'
      transitionReady.current = false
      setTimeout(() => {
        transitionReady.current = true
      }, transitionDuration);

      if (value) {
        childrenDiv.current.style.height = "auto"
        const height = childrenDiv.current.getBoundingClientRect().height
        childrenDiv.current.style.height = '0px'
        childrenDiv.current.getBoundingClientRect()
        childrenDiv.current.style.height = height + 'px'
        const afterUnfold = () => {
          if (!childrenDiv.current) return
          childrenDiv.current.style.height = "auto"
          childrenDiv.current.removeEventListener("transitionend", afterUnfold)
        }
        childrenDiv.current.addEventListener('transitionend', afterUnfold)
      } else {
        const height = childrenDiv.current.getBoundingClientRect().height
        childrenDiv.current.style.height = height + 'px'
        childrenDiv.current.getBoundingClientRect()
        childrenDiv.current.style.height = '0px'
      }

    }
  })

  return <div key={treeItem.text} className={sc({ ['level-' + level]: true, item: true })}>
    <div className={sc('text')}>
      <div className={sc('text-icon')}>
        {treeItem.children ? value ? <Icon name='CaretDown' onClick={unfold}/> : <Icon name='CaretRight' onClick={fold}/>: ''}
      </div>
      <label>
        <input type='checkBox'
          checked={checkedBoolean}
          onChange={fnOnChange}
          disabled={treeItem.disabled}
          ref={inputRef} />
        <span>
          {treeItem.value}
        </span>
      </label>
    </div>
    <div className={sc('unfold')} ref={childrenDiv}>
      {treeItem.children && treeItem.children.map(item =>
        <TreeItem treeItem={item}
          level={level + 1}
          treePops={treePops}
          key={item.value}
          itemOnChange={itemOnChange} />)}
    </div>

  </div>
}

export default TreeItem


function treeChildrenValues (item: treeDataItem): string[]{
  return flatArray(item.children && item.children.map((i) => [i.value, treeChildrenValues(i)])
  )
}
function flatArray (arr: any): string[] {
  if (!arr) { return []; }
  return arr.reduce((a: string | any[], b: any) => a.concat(b instanceof Array ? flatArray(b) : b), [])
}
