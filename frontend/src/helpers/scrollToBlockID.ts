export default function scrollToBlockID(blockID: string) {
    const block = document.querySelector(blockID);

    if (block) {
        block.scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    }
}
