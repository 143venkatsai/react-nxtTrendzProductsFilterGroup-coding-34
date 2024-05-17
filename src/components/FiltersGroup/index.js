import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const isActive = category.categoryId === activeCategoryId
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const categoryClassName = isActive
        ? `category-name active`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilters = () => (
    <div className="category-container">
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoriesList()}</ul>
    </div>
  )

  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {activeRatingId, changeRating} = props
      const isActiveId = rating.ratingId === activeRatingId
      const onClickRatingItem = () => changeRating(rating.ratingId)
      const ratingClassName = isActiveId
        ? `rating-name active-rating`
        : `rating-name`
      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div className="ratings-container">
      <h1 className="rating-heading">Ratings</h1>
      <ul className="ratings-list">{renderRatingList()}</ul>
    </div>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilters()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
