let $ = require('jquery')
let fs = require('fs')
let filename = 'books'

$('#btnAdd').on('click', () => {
    let title = $('#txtTitle').val()
    let isRead = 'hayır'
    if ($('#checkIsRead').is(':checked')) {
        isRead = 'evet'
    } else {
        isRead = 'hayır'
    }
    console.log(title)
    fs.appendFileSync('books', title + ',' + isRead + '\n')
    addBook(title, isRead)
})

function addBook(title, isRead) {
    if (title) {
        let bookRow = '<tr><td class="col-4">' + title + '</td><td>  ' + isRead + '</td></tr>'
        $('#tableBooks').append(bookRow)
    }
}

function loadAndDisplayBooks() {
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n')

        data.forEach((book, index) => {
            let [title, isRead] = book.split(',')
            addBook(title, isRead)
        })
    }
    else {
        fs.writeFile(filename, '', (err) => {
            if (err)
                console.log(err)
        })
    }
}
loadAndDisplayBooks()