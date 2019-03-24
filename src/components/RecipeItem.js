import React from 'react'

const _highlightQuery = (name, query) => {
    if (query){
        var regex = new RegExp("(" + query + ")", "gi");
        return name.replace(regex, "<mark>$1</mark>");
    } else {
        return name;
    }
}

const RecipeItem = ({recipe, searchString}) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title" dangerouslySetInnerHTML={{__html: _highlightQuery(recipe.title, searchString)}}></h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>
                    <span dangerouslySetInnerHTML={{__html: _highlightQuery(recipe.ingredients, searchString) }}></span>
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;