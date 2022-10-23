import IconWebAssetFill0Wght100Grad0Opsz48 from '../components/WebAssetFill0Wght100Grad0Opsz48'
import IconWebAssetFill0Wght200Grad0Opsz48 from '../components/WebAssetFill0Wght200Grad0Opsz48'
import IconWebAssetFill0Wght300Grad0Opsz48 from '../components/WebAssetFill0Wght300Grad0Opsz48'
import IconWebAssetFill0Wght400Grad0Opsz48 from '../components/WebAssetFill0Wght400Grad0Opsz48'
import IconWebAssetFill0Wght500Grad0Opsz48 from '../components/WebAssetFill0Wght500Grad0Opsz48'
import IconWebAssetFill0Wght600Grad0Opsz48 from '../components/WebAssetFill0Wght600Grad0Opsz48'
import IconWebAssetFill0Wght700Grad0Opsz48 from '../components/WebAssetFill0Wght700Grad0Opsz48'
import IconWebAssetFill1Wght100Grad0Opsz48 from '../components/WebAssetFill1Wght100Grad0Opsz48'
import IconWebAssetFill1Wght200Grad0Opsz48 from '../components/WebAssetFill1Wght200Grad0Opsz48'
import IconWebAssetFill1Wght300Grad0Opsz48 from '../components/WebAssetFill1Wght300Grad0Opsz48'
import IconWebAssetFill1Wght400Grad0Opsz48 from '../components/WebAssetFill1Wght400Grad0Opsz48'
import IconWebAssetFill1Wght500Grad0Opsz48 from '../components/WebAssetFill1Wght500Grad0Opsz48'
import IconWebAssetFill1Wght600Grad0Opsz48 from '../components/WebAssetFill1Wght600Grad0Opsz48'
import IconWebAssetFill1Wght700Grad0Opsz48 from '../components/WebAssetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWebAsset = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWebAssetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWebAssetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWebAssetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWebAssetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWebAssetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWebAssetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWebAssetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWebAssetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWebAssetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWebAssetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWebAssetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWebAssetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWebAssetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWebAssetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
