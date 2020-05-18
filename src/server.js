app.use(express.static('./ dist / <lesoft-softmedic-frontend> '));

app.get('/ *', function (req, res) {
    res.sendFile('index.html', { root: 'dist / <lesoft-softmedic-frontend> /' }
    );
});

app.listen(proceso.env.PORT || 8080);