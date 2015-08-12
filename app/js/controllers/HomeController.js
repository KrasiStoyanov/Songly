'use strict';

app.controller('HomeController', function($scope) {
    $scope.songs = [
        {
            thumbnailSrc: '../img/artists/albumCovers/MetallicaEnterSandmanWallpaper.jpg',
            alt: 'Metallica - Enter Sandman',
            length: '5:31',
            title: 'Enter Sandman',
            artist: 'Metallica',
            artistHref: '#'
        },
        {
            thumbnailSrc: '../img/artists/albumCovers/MachineHeadUntoTheLocustWallpaper.jpg',
            alt: 'Machine Head - Locust',
            length: '6:18',
            title: 'Locust',
            artist: 'Machine Head',
            artistHref: '#'
        },
        {
            thumbnailSrc: '../img/artists/albumCovers/MachineHeadBloodstone&DiamondsWallpaper.jpg',
            alt: 'Machine Head - Now We Die',
            length: '7:14',
            title: 'Now We Die',
            artist: 'Machine Head',
            artistHref: '#'
        },
        {
            thumbnailSrc: '../img/artists/albumCovers/NightwishMasterPassionGreedWallpaper.jpg',
            alt: 'Nightwish - Master Passion Greed',
            length: '6:03',
            title: 'Master Passion Greed',
            artist: 'Nightwish',
            artistHref: '#'
        },
        {
            thumbnailSrc: '../img/artists/albumCovers/SlipknotSnuffWallpaper.jpg',
            alt: 'Slipknot - Snuff',
            length: '4:36',
            title: 'Snuff',
            artist: 'Slipknot',
            artistHref: '#'
        },
        {
            thumbnailSrc: '../img/artists/albumCovers/SlipknotBandWallpaper.jpg',
            alt: 'Slipknot - Everything Ends',
            length: '4:14',
            title: 'Everything Ends',
            artist: 'Slipknot',
            artistHref: '#'
        }
    ]
});