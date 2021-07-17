---
title: Search & Files tag
sidebar_label: Search & Files tag
slug: search-files-tags
---

## Search
The search mechanism allows to quickly find existing entries in database, weather by looking for matching string or 
by tag applied to a file - that's why the file based modules contain possibility to save a tag for given document.

The logic behind this relies on: 
* The action defined in the `SearchAction::getSearchResultsDataForTag` (*since search relies on strings contained in provided tags*)

:::tip
In order to extend the logic, all that has to be done is to extend search results by types:
````php
$files_search_results = $this->app->repositories->filesSearchRepository->getSearchResultsDataForTag($tags_array, FilesSearchRepository::SEARCH_TYPE_FILES, true);
$notes_search_results = $this->app->repositories->filesSearchRepository->getSearchResultsDataForTag($tags_array, FilesSearchRepository::SEARCH_TYPE_NOTES, true);

$search_results = array_merge(
    $files_search_results,
    $notes_search_results
);
````
:::
* Repository which fetches the data used to apply searched strings/tags `FilesSearchRepository`

:::tip
The most important thing is to extend the logic in method `getSearchResultsDataForTag` by providing new type and the `getSql` 
just like it's already done:

````php
switch($search_type){
    case self::SEARCH_TYPE_FILES:
        $sql = $this->getSqlForFileSearch($tags_sql);
        break;
    case self::SEARCH_TYPE_NOTES:
        $sql = $this->getSqlForNotesSearch($tags_sql);
        break;
    default:
        throw new Exception("Undefined search type for search results: {$search_type}.");
}
````
:::

* The last thing to extend is the script `src/assets/scripts/core/ui/Search`

:::tip
The first required thing is to extend the logic in `buildSearchResults`, and the second one is to create a search builder 
method like it's for example already done for files: `buildFilesSearchResultsListElement` 
:::

## Files tags
The tagging mechanism has been designed strictly for files. This relies on:

* `selectize` - javascript plugin,
* `FilesTagsAction::apiUpdateTags` - which receives file path and tags in form of strings from frontend,
* `FilesTagsController::updateTags` - which passes the data further to the tagging service `FileTagger`

:::tip
To extend this logic up to any other files based module, all that is needed is an action calling/providing logic similar 
to the one present in `MyImagesAction::update`:
````php
$file_current_path = $request->request->get(DialogsAction::KEY_FILE_CURRENT_PATH);
$tags_string       = $request->request->get(FileTagger::KEY_TAGS);
$this->files_tags_controller->updateTags($tags_string, $file_current_path);
````
:::



