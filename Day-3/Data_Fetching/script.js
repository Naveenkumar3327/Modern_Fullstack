const searchInput = document.getElementById("searchInput");
const resultsTable = document.getElementById("resultsTable");
const resultsBody = document.getElementById("resultsBody");
const loadingText = document.getElementById("loadingText");
const notFoundText = document.getElementById("notFoundText");

function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) return;

    resultsTable.style.display = "none";
    notFoundText.style.display = "none";
    loadingText.style.display = "block";

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => res.json())
        .then(data => {
            loadingText.style.display = "none";
            resultsBody.innerHTML = "";

            if (!data.items || data.items.length === 0) {
                notFoundText.style.display = "block";
                return;
            }

            data.items.forEach((book, i) => {
                const info = book.volumeInfo;
                const sale = book.saleInfo;

                const row = document.createElement("tr");

                const title = document.createElement("td");
                title.textContent = info.title;

                const authors = document.createElement("td");
                authors.textContent = info.authors ? info.authors.join(", ") : "N/A";

                const publisher = document.createElement("td");
                publisher.textContent = info.publisher || "N/A";

                const price = document.createElement("td");
                if (sale.saleability === "FOR_SALE" && sale.retailPrice) {
                    price.textContent = `${sale.retailPrice.amount} ${sale.retailPrice.currencyCode}`;
                } else {
                    price.textContent = "Not for sale";
                }

                const link = document.createElement("td");
                if (sale.buyLink) {
                    const a = document.createElement("a");
                    a.href = sale.buyLink;
                    a.target = "_blank";
                    a.textContent = "Buy";
                    link.appendChild(a);
                } else {
                    link.textContent = "N/A";
                }

                row.appendChild(title);
                row.appendChild(authors);
                row.appendChild(publisher);
                row.appendChild(price);
                row.appendChild(link);

                resultsBody.appendChild(row);
            });

            resultsTable.style.display = "table";
        })
        .catch(err => {
            loadingText.style.display = "none";
            console.error("Error fetching books:", err);
        });
}
