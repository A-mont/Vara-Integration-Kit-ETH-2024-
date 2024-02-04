function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Lesson</th>
            <th>Topic</th>
            <th>Accuracy</th>
            <th>Completion</th>
            <th>Tokens Won</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1.1</th>
            <td>Basics</td>
            <td>0.82</td>
            <td>73%</td>
            <td>7</td>
            <td>
              <a type="button" className="btn bg-secondary" href="/chat">
                {" "}
                continue{" "}
              </a>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>1.2</th>
            <td>Food</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>1.3</th>
            <td>Animals</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Table };
