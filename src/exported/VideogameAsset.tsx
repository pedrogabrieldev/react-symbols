import IconVideogameAssetFill0Wght100Grad0Opsz48 from '../components/VideogameAssetFill0Wght100Grad0Opsz48'
import IconVideogameAssetFill0Wght200Grad0Opsz48 from '../components/VideogameAssetFill0Wght200Grad0Opsz48'
import IconVideogameAssetFill0Wght300Grad0Opsz48 from '../components/VideogameAssetFill0Wght300Grad0Opsz48'
import IconVideogameAssetFill0Wght400Grad0Opsz48 from '../components/VideogameAssetFill0Wght400Grad0Opsz48'
import IconVideogameAssetFill0Wght500Grad0Opsz48 from '../components/VideogameAssetFill0Wght500Grad0Opsz48'
import IconVideogameAssetFill0Wght600Grad0Opsz48 from '../components/VideogameAssetFill0Wght600Grad0Opsz48'
import IconVideogameAssetFill0Wght700Grad0Opsz48 from '../components/VideogameAssetFill0Wght700Grad0Opsz48'
import IconVideogameAssetFill1Wght100Grad0Opsz48 from '../components/VideogameAssetFill1Wght100Grad0Opsz48'
import IconVideogameAssetFill1Wght200Grad0Opsz48 from '../components/VideogameAssetFill1Wght200Grad0Opsz48'
import IconVideogameAssetFill1Wght300Grad0Opsz48 from '../components/VideogameAssetFill1Wght300Grad0Opsz48'
import IconVideogameAssetFill1Wght400Grad0Opsz48 from '../components/VideogameAssetFill1Wght400Grad0Opsz48'
import IconVideogameAssetFill1Wght500Grad0Opsz48 from '../components/VideogameAssetFill1Wght500Grad0Opsz48'
import IconVideogameAssetFill1Wght600Grad0Opsz48 from '../components/VideogameAssetFill1Wght600Grad0Opsz48'
import IconVideogameAssetFill1Wght700Grad0Opsz48 from '../components/VideogameAssetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideogameAsset = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideogameAssetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideogameAssetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideogameAssetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideogameAssetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideogameAssetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideogameAssetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideogameAssetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideogameAssetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideogameAssetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideogameAssetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideogameAssetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideogameAssetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideogameAssetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideogameAssetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
