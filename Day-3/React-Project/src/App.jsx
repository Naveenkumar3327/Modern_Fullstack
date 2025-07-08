import { useState } from 'react'

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const fetchBooks = (query) => {
    if (!query.trim()) return
    setLoading(true)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items || [])
        setLoading(false)
        setShowResults(true)
        console.log("Results:", data.items)
      })
      .catch((err) => {
        console.error("Error fetching books:", err)
        setLoading(false)
      })
  }

  const handleSearch = () => {
    fetchBooks(search)
  }

  const generateBookRows = () => {
    const rows = []
    for (let i = 0; i < books.length; i++) {
      const info = books[i].volumeInfo
      const sale = books[i].saleInfo

      rows.push(
        <tr key={i} style={styles.row}>
          <td style={styles.cell}>{info.title}</td>
          <td style={styles.cell}>{info.authors ? info.authors.join(', ') : 'N/A'}</td>
          <td style={styles.cell}>{info.publisher || 'N/A'}</td>
          <td style={styles.cell}>
            {sale.saleability === 'FOR_SALE'
              ? `${sale.retailPrice.amount} ${sale.retailPrice.currencyCode}`
              : 'Not for sale'}
          </td>
          <td style={styles.cell}>
            {sale.buyLink
              ? <a href={sale.buyLink} target="_blank" rel="noreferrer" style={styles.link}>Buy</a>
              : 'N/A'}
          </td>
        </tr>
      )
    }

    // If no books yet (first load or no match), show empty rows
    if (rows.length === 0) {
      for (let i = 0; i < 3; i++) {
        rows.push(
          <tr key={`placeholder-${i}`} style={styles.row}>
            <td style={styles.cell} colSpan={5} align="center">No data yet</td>
          </tr>
        )
      }
    }

    return rows
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Book Finder</h1>

      <div style={styles.searchRow}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books like 'Harry Potter', 'React', 'Design'..."
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>
      </div>

      <p style={styles.suggestion}>
        💡 Suggestions: HTML, AI, React, UI Design, Marketing
      </p>

      {loading && <p style={{ color: "#555" }}>Loading...</p>}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Author</th>
            <th style={styles.th}>Publisher</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Link</th>
          </tr>
        </thead>
        <tbody>
          {generateBookRows()}
        </tbody>
      </table>

      {showResults && books.length === 0 && !loading && (
        <p style={styles.notFound}>No books found. Try a different keyword.</p>
      )}
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#2c3e50"
  },
  searchRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    width: "100%",
    maxWidth: "700px",
    justifyContent: "center"
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    flex: 1,
    border: "1px solid #ccc",
    borderRadius: "6px",
    outlineColor: "#3498db"
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  suggestion: {
    fontStyle: "italic",
    color: "#555",
    marginBottom: "30px"
  },
  table: {
    width: "100%",
    maxWidth: "1000px",
    backgroundColor: "#fff",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden"
  },
  th: {
    backgroundColor: "#ecf0f1",
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #ccc"
  },
  row: {
    borderBottom: "1px solid #eee"
  },
  cell: {
    padding: "12px",
    fontSize: "15px",
    color: "#333"
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "bold"
  },
  notFound: {
    color: "#e74c3c",
    marginTop: "20px",
    fontWeight: "bold"
  }
}

export default App
