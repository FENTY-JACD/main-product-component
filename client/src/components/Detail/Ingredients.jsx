import React from 'react';

function Ingredients(props) {
  console.log(props.item.name)
  return (
    <p>
      The following shades are vegan: Brown Sugar and Cognac Candy.
      <br />

      BROWN SUGAR: HYDROGENATED POLYISOBUTENE, ISODODECANE, ETHYLENE/PROPYLENE/STYRENE COPOLYMER, SYNTHETIC FLUORPHLOGOPITE, SILICA, PARFUM/FRAGRANCE, BUTYLENE/ETHYLENE/STYRENE COPOLYMER, ALUMINA, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, TIN OXIDE, IRON OXIDES (CI 77491, CI 77499), TITANIUM DIOXIDE (CI 77891).

      COGNAC CANDY: HYDROGENATED POLYISOBUTENE, ISODODECANE, ETHYLENE/PROPYLENE/STYRENE COPOLYMER, SYNTHETIC FLUORPHLOGOPITE, SILICA, CALCIUM SODIUM BOROSILICATE, PARFUM/FRAGRANCE, BUTYLENE/ETHYLENE/STYRENE COPOLYMER, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, TIN OXIDE, IRON OXIDES (CI 77491, CI 77492), TITANIUM DIOXIDE (CI 77891).

      WHO NEEDS CLOTHES?!: HYDROGENATED POLYISOBUTENE, ISODODECANE, ETHYLENE/PROPYLENE/STYRENE COPOLYMER, CALCIUM SODIUM BOROSILICATE, SILICA, PARFUM/FRAGRANCE, SYNTHETIC FLUORPHLOGOPITE, BUTYLENE/ETHYLENE/STYRENE COPOLYMER, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, TIN OXIDE, TITANIUM DIOXIDE (CI 77891), IRON OXIDES (CI 77491), CARMINE (CI 75470).
    </p>
  );
}

export default Ingredients;