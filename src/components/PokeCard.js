import React from 'react'

const PokeCard = ({ pokemon }) => {
  const { weight, name, order, stats, sprites } = pokemon;
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div class="card">
            <img src={sprites.front_default} class="card-img-top" alt="..." />
            <img src={sprites.back_default} class="card-img-top" alt="..." />
            <div class="card-body">
              <h3>#{order}</h3>
              <h5 class="card-title">
                {name}
              </h5>
              <p class="card-text">Weight: {weight}</p>
              <ul class="list-group list-group-flush">
                {
                  stats.map(element => <li class="list-group-item">{element.stat.name}: {element.base_stat}</li>)
                }
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeCard
