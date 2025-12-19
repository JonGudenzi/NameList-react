export default function FilterButtons({ viewFilter, setViewFilter }) {
    return (
        <div>
                <button onClick={() => setViewFilter("all")}>
                    All {viewFilter === "all" && "✓"}
                </button>

                <button onClick={() => setViewFilter("open")}>
                    Open {viewFilter === "open" && "✓"}
                </button>

                <button onClick={() => setViewFilter("done")}>
                    Done {viewFilter === "done" && "✓"}
                </button>

                <button onClick={() => setViewFilter("archived")}>
                    Archived {viewFilter === "archived" && "✓"}
                </button>
            </div>
    );
}