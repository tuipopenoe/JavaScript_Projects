import RedditApi from './reddit-api'
import ExtractImages from './extract-imgs'
import DisplayImages from './display-imgs'

RedditApi.load()
    .then(ExtractImages)
    .then(DisplayImages) 

export default{}