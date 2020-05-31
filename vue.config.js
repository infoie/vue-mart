module.exports = {
    configureWebpack: {
        //拓展webpack
        devServer: {
            before(app) {
                app.get('/api/goods', function (req, res) {
                    res.json({
                        code: 0,
                        data: [
                            {
                                id: 1,
                                title: 'React16.x实战',
                                price: '150',
                                img: '/img/01.png',
                                count: 100
                            },
                            {
                                id: 2,
                                title: 'Vue2.x实战',
                                price: '80',
                                img: '/img/02.png',
                                count: 100
                            },
                            {
                                id: 3,
                                title: 'React16.x实战',
                                price: '30',
                                img: '/img/03.png',
                                count: 100
                            },
                            {
                                id: 4,
                                title: 'nodejs实战',
                                price: '120',
                                img: '/img/04.png',
                                count: 100
                            },
                            {
                                id: 5,
                                title: '基础课程',
                                price: '10',
                                img: '/img/05.png',
                                count: 100
                            },
                            {
                                id: 6,
                                title: '进阶课程',
                                price: '25',
                                img: '/img/06.png',
                                count: 100
                            },
                            {
                                id: 7,
                                title: '高级课程',
                                price: '900',
                                img: '/img/07.png',
                                count: 100
                            },
                            {
                                id: 8,
                                title: '兴趣班1',
                                price: '60',
                                img: '/img/08.png',
                                count: 100
                            },
                            {
                                id: 9,
                                title: '兴趣班2',
                                price: '100',
                                img: '/img/09.png',
                                count: 100
                            },
                            {
                                id: 10,
                                title: 'React16.x实战',
                                price: '120',
                                img: '/img/10.png',
                                count: 100
                            }
                        ]
                    })
                })
            }
        }
    }
}