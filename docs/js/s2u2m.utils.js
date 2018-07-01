
function get_url_rel(url) {
    console.debug(url)
    let url_parts = url.split("//")
    let rel_index = url_parts[1].indexOf('/')
    let rel = url_parts[1].substring(rel_index)

    if (rel.indexOf('?') != -1) {
        rel = rel.split('?')[0]
    }

    return rel
}