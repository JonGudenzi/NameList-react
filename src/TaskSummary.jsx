export default function TaskSummary({ visibleCount, totalCount }) {
    return (
        <>
        <p>
                Showing {visibleCount} of {totalCount}
            </p>
        </>
    )
}