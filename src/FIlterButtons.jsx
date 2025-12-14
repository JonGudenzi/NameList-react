export default function FilterButtons({ viewFilter, setViewFilter }) {
    return (
        <div>
                <button onClick={() => setViewFilter("all")}>
                    All {viewFilter === "all" && "✓"}
                </button>

                <button onClick={() => setViewFilter("open")}>
                    Open {viewFilter === "open" && "✓"}
                </button>

                <button onClick={() => setViewFilter("closed")}>
                    Closed {viewFilter === "closed" && "✓"}
                </button>
            </div>
    );
}