import IconWebAssetOffFill0Wght100Grad0Opsz48 from '../components/WebAssetOffFill0Wght100Grad0Opsz48'
import IconWebAssetOffFill0Wght200Grad0Opsz48 from '../components/WebAssetOffFill0Wght200Grad0Opsz48'
import IconWebAssetOffFill0Wght300Grad0Opsz48 from '../components/WebAssetOffFill0Wght300Grad0Opsz48'
import IconWebAssetOffFill0Wght400Grad0Opsz48 from '../components/WebAssetOffFill0Wght400Grad0Opsz48'
import IconWebAssetOffFill0Wght500Grad0Opsz48 from '../components/WebAssetOffFill0Wght500Grad0Opsz48'
import IconWebAssetOffFill0Wght600Grad0Opsz48 from '../components/WebAssetOffFill0Wght600Grad0Opsz48'
import IconWebAssetOffFill0Wght700Grad0Opsz48 from '../components/WebAssetOffFill0Wght700Grad0Opsz48'
import IconWebAssetOffFill1Wght100Grad0Opsz48 from '../components/WebAssetOffFill1Wght100Grad0Opsz48'
import IconWebAssetOffFill1Wght200Grad0Opsz48 from '../components/WebAssetOffFill1Wght200Grad0Opsz48'
import IconWebAssetOffFill1Wght300Grad0Opsz48 from '../components/WebAssetOffFill1Wght300Grad0Opsz48'
import IconWebAssetOffFill1Wght400Grad0Opsz48 from '../components/WebAssetOffFill1Wght400Grad0Opsz48'
import IconWebAssetOffFill1Wght500Grad0Opsz48 from '../components/WebAssetOffFill1Wght500Grad0Opsz48'
import IconWebAssetOffFill1Wght600Grad0Opsz48 from '../components/WebAssetOffFill1Wght600Grad0Opsz48'
import IconWebAssetOffFill1Wght700Grad0Opsz48 from '../components/WebAssetOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWebAssetOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWebAssetOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWebAssetOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWebAssetOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWebAssetOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWebAssetOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWebAssetOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWebAssetOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWebAssetOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWebAssetOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWebAssetOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWebAssetOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWebAssetOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWebAssetOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWebAssetOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
