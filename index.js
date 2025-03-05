(function () {
    if (window.customNotepad) {
        window.customNotepad.remove();
        window.restoreButton?.remove();
    }

    // Create the main window
    let notepad = document.createElement("div");
    Object.assign(notepad.style, {
        position: "fixed",
        top: "100px",
        left: "100px",
        width: "450px",
        height: "300px",
        background: "#1e1e1e",
        border: "1px solid #333",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        zIndex: "9999",
        resize: "both",
        overflow: "hidden",
        color: "white",
        fontFamily: "'Open Sans', sans-serif"
    });
    document.body.appendChild(notepad);
    window.customNotepad = notepad;

    // Title bar
    let titleBar = document.createElement("div");
    Object.assign(titleBar.style, {
        height: "32px",
        background: "#333",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        fontSize: "14px",
        fontWeight: "bold",
        userSelect: "none",
        cursor: "move",
        fontFamily: "'Open Sans', sans-serif"
    });
    titleBar.innerText = "Reflect 1.3";
    notepad.appendChild(titleBar);

    // Buttons Container
    let buttonContainer = document.createElement("div");
    buttonContainer.style.marginLeft = "auto";
    buttonContainer.style.display = "flex";
    titleBar.appendChild(buttonContainer);

    // Minimize Button
    let minimizeButton = document.createElement("div");
    minimizeButton.innerText = "—";
    Object.assign(minimizeButton.style, {
        cursor: "pointer",
        padding: "5px 10px",
        fontSize: "16px",
        textAlign: "center"
    });
    minimizeButton.onclick = () => {
        notepad.style.display = "none";
        restoreButton.style.display = "block";
    };
    buttonContainer.appendChild(minimizeButton);

    // Close Button
    let closeButton = document.createElement("div");
    closeButton.innerText = "X";
    Object.assign(closeButton.style, {
        cursor: "pointer",
        padding: "5px 10px",
        fontSize: "14px",
        textAlign: "center"
    });
    closeButton.onclick = () => {
        notepad.remove();
        restoreButton.remove();
    };
    buttonContainer.appendChild(closeButton);

    // Toolbar
    let toolbar = document.createElement("div");
    Object.assign(toolbar.style, {
        display: "flex",
        background: "#2b2b2b",
        padding: "5px",
        borderBottom: "1px solid #444"
    });
    notepad.appendChild(toolbar);

    function createButton(label, styleTag) {
        let button = document.createElement("button");
        button.innerText = label;
        Object.assign(button.style, {
            background: "#444",
            color: "white",
            border: "none",
            padding: "5px",
            marginRight: "5px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "0.1s",
            fontFamily: "'Open Sans', sans-serif"
        });

        button.onclick = () => {
            document.execCommand(styleTag);
        };

        toolbar.appendChild(button);
        return button;
    }

    let boldButton = createButton("B", "bold");
    let italicButton = createButton("I", "italic");
    let underlineButton = createButton("U", "underline");

    // Create the textarea
    let textArea = document.createElement("div");
    Object.assign(textArea.style, {
        flex: "1",
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        padding: "10px",
        fontSize: "14px",
        background: "#252526",
        color: "white",
        overflowY: "auto",
        whiteSpace: "pre-wrap",
        fontFamily: "'Open Sans', sans-serif"
    });
    textArea.contentEditable = "true";
    notepad.appendChild(textArea);

    // Draggable window
    let offsetX, offsetY, isDragging = false;
    titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - notepad.offsetLeft;
        offsetY = e.clientY - notepad.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            notepad.style.left = `${e.clientX - offsetX}px`;
            notepad.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => isDragging = false);

    // Restore button
    let restoreButton = document.createElement("button");
    restoreButton.innerText = "Open Notepad";
    Object.assign(restoreButton.style, {
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "#0078D7",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        display: "none",
        fontFamily: "'Open Sans', sans-serif"
    });
    restoreButton.onclick = () => {
        notepad.style.display = "flex";
        restoreButton.style.display = "none";
    };
    document.body.appendChild(restoreButton);
    window.restoreButton = restoreButton;
})();
