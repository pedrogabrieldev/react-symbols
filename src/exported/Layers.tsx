import IconLayersFill0Wght100Grad0Opsz48 from '../components/LayersFill0Wght100Grad0Opsz48'
import IconLayersFill0Wght200Grad0Opsz48 from '../components/LayersFill0Wght200Grad0Opsz48'
import IconLayersFill0Wght300Grad0Opsz48 from '../components/LayersFill0Wght300Grad0Opsz48'
import IconLayersFill0Wght400Grad0Opsz48 from '../components/LayersFill0Wght400Grad0Opsz48'
import IconLayersFill0Wght500Grad0Opsz48 from '../components/LayersFill0Wght500Grad0Opsz48'
import IconLayersFill0Wght600Grad0Opsz48 from '../components/LayersFill0Wght600Grad0Opsz48'
import IconLayersFill0Wght700Grad0Opsz48 from '../components/LayersFill0Wght700Grad0Opsz48'
import IconLayersFill1Wght100Grad0Opsz48 from '../components/LayersFill1Wght100Grad0Opsz48'
import IconLayersFill1Wght200Grad0Opsz48 from '../components/LayersFill1Wght200Grad0Opsz48'
import IconLayersFill1Wght300Grad0Opsz48 from '../components/LayersFill1Wght300Grad0Opsz48'
import IconLayersFill1Wght400Grad0Opsz48 from '../components/LayersFill1Wght400Grad0Opsz48'
import IconLayersFill1Wght500Grad0Opsz48 from '../components/LayersFill1Wght500Grad0Opsz48'
import IconLayersFill1Wght600Grad0Opsz48 from '../components/LayersFill1Wght600Grad0Opsz48'
import IconLayersFill1Wght700Grad0Opsz48 from '../components/LayersFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLayers = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLayersFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLayersFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLayersFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLayersFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLayersFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLayersFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLayersFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLayersFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLayersFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLayersFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLayersFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLayersFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLayersFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLayersFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
