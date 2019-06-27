export default function scrollbarWidth() {
    const box = document.createElement("div");
    box.style.position = "absolute";
    box.style.top = box.style.left = "-9999px";
    box.style.width = box.style.height = "100px";
    box.style.overflow = "scroll";
    document.body.appendChild(box);
    const width = box.offsetWidth - box.clientWidth;
    document.body.removeChild(box);
    return width;
}