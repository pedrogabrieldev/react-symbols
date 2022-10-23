import IconVideogameAssetOffFill0Wght100Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght100Grad0Opsz48'
import IconVideogameAssetOffFill0Wght200Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght200Grad0Opsz48'
import IconVideogameAssetOffFill0Wght300Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght300Grad0Opsz48'
import IconVideogameAssetOffFill0Wght400Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght400Grad0Opsz48'
import IconVideogameAssetOffFill0Wght500Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght500Grad0Opsz48'
import IconVideogameAssetOffFill0Wght600Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght600Grad0Opsz48'
import IconVideogameAssetOffFill0Wght700Grad0Opsz48 from '../components/VideogameAssetOffFill0Wght700Grad0Opsz48'
import IconVideogameAssetOffFill1Wght100Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght100Grad0Opsz48'
import IconVideogameAssetOffFill1Wght200Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght200Grad0Opsz48'
import IconVideogameAssetOffFill1Wght300Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght300Grad0Opsz48'
import IconVideogameAssetOffFill1Wght400Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght400Grad0Opsz48'
import IconVideogameAssetOffFill1Wght500Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght500Grad0Opsz48'
import IconVideogameAssetOffFill1Wght600Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght600Grad0Opsz48'
import IconVideogameAssetOffFill1Wght700Grad0Opsz48 from '../components/VideogameAssetOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideogameAssetOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideogameAssetOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideogameAssetOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideogameAssetOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideogameAssetOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideogameAssetOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideogameAssetOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideogameAssetOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideogameAssetOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideogameAssetOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideogameAssetOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideogameAssetOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideogameAssetOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideogameAssetOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideogameAssetOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
