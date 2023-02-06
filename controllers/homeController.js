export const showJobs = (req, res) => {
    res.render('home', {
        page: 'DevJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores web',
        bar: true,
        button: true
    })
};
