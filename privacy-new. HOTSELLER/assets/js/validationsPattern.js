let _validationsPattern = {}

const getValidationsPattern = () => {
    return _validationsPattern
}

const setValidationsPattern = (pattern) => {
    if(!pattern) return _validationsPattern = {}
    let parsedPattern = parsedPatterns(pattern)
    convertPatternsToRegex(parsedPattern)
    convertPatternSensitiveInfosToString(parsedPattern)
    _validationsPattern = parsedPattern
}

window.getValidationsPattern = getValidationsPattern;
window.setValidationsPattern = setValidationsPattern;

function parsedPatterns(pattern) {
    return pattern ?
        (typeof pattern === "string" ? base64ToObject(pattern) : pattern)
        : {}
}

function convertPatternsToRegex(parsedPattern) {
    Object.keys(parsedPattern).forEach(key => {
        if (typeof parsedPattern[key] === "string") {
            const regex = convertToRegex(parsedPattern[key])
            if (regex) {
                parsedPattern[key] = regex
            }
        }
    })
}

function convertPatternSensitiveInfosToString(parsedPattern) {
    if (parsedPattern.SENSITIVE_INFOS_PATTERN) {
        parsedPattern.SENSITIVE_INFOS_PATTERN = parsedPattern.SENSITIVE_INFOS_PATTERN.map(pattern => {
            if(!pattern) return
            return escapeRegexString(typeof pattern === "string" ? pattern : pattern.source)
        })
    }
}

function convertToRegex(regexString) {
    if(!regexString) return
    if (regexString instanceof RegExp) {
        return regexString
    }
    if (typeof regexString !== "string") return null

    try {
        return normalizedRegexString(regexString)
    } catch (error) {
        console.warn("Error converting regex:", regexString, error)
    }
}

function normalizedRegexString(regexString) {
    const matches = regexString.match(/^\/(.+)\/([gimuy]*)$/)
    if (!matches) return new RegExp(regexString)
    return new RegExp(matches[1], matches[2])
}

function escapeRegexString(regexString) {
    if (!regexString.includes("\\\\")) return regexString
    return regexString.replace(/\\\\/g, "\\")
}

function base64ToObject(base64) {
    const ret = base64 ? atob(base64) : undefined
    return castObject(ret)
}

function castObject(val) {
    return !val ? {} : typeof val === "object" ? val : JSON.parse(val)
}