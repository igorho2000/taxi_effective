export const locations_center = {
    taiwan: [119.31191853473547, 24.13669428168724],
    northArea: [121.26193463982423, 24.808416929421213],
    taipei: [121.55585298158064, 25.05244617333119]
}

export const initZoom = {
    taiwan:8,
    northArea: 9,
    taipei: 11.3,
    compare: 12.6,
    zoomin: 14
}
export const maxZoom = {
    taiwan:8,
    northArea: 9,
    taipei: 11.3,
    hotspot: 13.5
}

/** maxBound
 *  [Southwest coordinates, Northeast coordinates]
 */
export const maxBound = {
    taiwan: [
        [118.2374063836105, 21.783203698373455],
        [124.62465547969902, 26.565780208588365]
    ],
    northArea: [
        [120.74234593082292, 24.34024913865882],
        [122.03570856000556, 25.30655033147835]
    ],
    taipei: [
        [121.48406601135343, 24.98549593389238],
        [121.6198909438732, 25.134557481569985]
    ]
}

export const fitPadding = {
    commom: {top: 0, bottom:5, left: 500, right: 5},
    mobile: {top: 5, bottom:5, left: 5, right: 5}
}