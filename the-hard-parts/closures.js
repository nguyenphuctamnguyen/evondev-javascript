function showInformation() {
    // local execution context
    // backpack
    const myName = "su";
    function getName() {
        // getName execution context
        return myName;
    }
    return getName;
}
const info = showInformation();
console.log("info", info);
console.log(info()); // su
