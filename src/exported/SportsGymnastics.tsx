import IconSportsGymnasticsFill0Wght100Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght100Grad0Opsz48'
import IconSportsGymnasticsFill0Wght200Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght200Grad0Opsz48'
import IconSportsGymnasticsFill0Wght300Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght300Grad0Opsz48'
import IconSportsGymnasticsFill0Wght400Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght400Grad0Opsz48'
import IconSportsGymnasticsFill0Wght500Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght500Grad0Opsz48'
import IconSportsGymnasticsFill0Wght600Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght600Grad0Opsz48'
import IconSportsGymnasticsFill0Wght700Grad0Opsz48 from '../components/SportsGymnasticsFill0Wght700Grad0Opsz48'
import IconSportsGymnasticsFill1Wght100Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght100Grad0Opsz48'
import IconSportsGymnasticsFill1Wght200Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght200Grad0Opsz48'
import IconSportsGymnasticsFill1Wght300Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght300Grad0Opsz48'
import IconSportsGymnasticsFill1Wght400Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght400Grad0Opsz48'
import IconSportsGymnasticsFill1Wght500Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght500Grad0Opsz48'
import IconSportsGymnasticsFill1Wght600Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght600Grad0Opsz48'
import IconSportsGymnasticsFill1Wght700Grad0Opsz48 from '../components/SportsGymnasticsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSportsGymnastics = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSportsGymnasticsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSportsGymnasticsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSportsGymnasticsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSportsGymnasticsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSportsGymnasticsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSportsGymnasticsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSportsGymnasticsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSportsGymnasticsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSportsGymnasticsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSportsGymnasticsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSportsGymnasticsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSportsGymnasticsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSportsGymnasticsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSportsGymnasticsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
