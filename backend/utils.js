function createSuccessResult(data)
{
    return { status: 'success', data }
}

function createErrorResult(error)
{
    return { status: 'error', error }
}

function createResult(error, data)
{
    return error ? createErrorResult(error) : createSuccessResult(data)
}
module.exports = {
    createSuccessResult,
    createErrorResult,
    createResult,
}
