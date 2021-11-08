function classes(...names: (string | undefined)[]) {
    return names.filter((item)=>item).join(' ')    
}

export default classes