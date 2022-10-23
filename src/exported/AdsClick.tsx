import IconAdsClickFill0Wght100Grad0Opsz48 from '../components/AdsClickFill0Wght100Grad0Opsz48'
import IconAdsClickFill0Wght200Grad0Opsz48 from '../components/AdsClickFill0Wght200Grad0Opsz48'
import IconAdsClickFill0Wght300Grad0Opsz48 from '../components/AdsClickFill0Wght300Grad0Opsz48'
import IconAdsClickFill0Wght400Grad0Opsz48 from '../components/AdsClickFill0Wght400Grad0Opsz48'
import IconAdsClickFill0Wght500Grad0Opsz48 from '../components/AdsClickFill0Wght500Grad0Opsz48'
import IconAdsClickFill0Wght600Grad0Opsz48 from '../components/AdsClickFill0Wght600Grad0Opsz48'
import IconAdsClickFill0Wght700Grad0Opsz48 from '../components/AdsClickFill0Wght700Grad0Opsz48'
import IconAdsClickFill1Wght100Grad0Opsz48 from '../components/AdsClickFill1Wght100Grad0Opsz48'
import IconAdsClickFill1Wght200Grad0Opsz48 from '../components/AdsClickFill1Wght200Grad0Opsz48'
import IconAdsClickFill1Wght300Grad0Opsz48 from '../components/AdsClickFill1Wght300Grad0Opsz48'
import IconAdsClickFill1Wght400Grad0Opsz48 from '../components/AdsClickFill1Wght400Grad0Opsz48'
import IconAdsClickFill1Wght500Grad0Opsz48 from '../components/AdsClickFill1Wght500Grad0Opsz48'
import IconAdsClickFill1Wght600Grad0Opsz48 from '../components/AdsClickFill1Wght600Grad0Opsz48'
import IconAdsClickFill1Wght700Grad0Opsz48 from '../components/AdsClickFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdsClick = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAdsClickFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAdsClickFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAdsClickFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAdsClickFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAdsClickFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAdsClickFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAdsClickFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAdsClickFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAdsClickFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAdsClickFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAdsClickFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAdsClickFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAdsClickFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAdsClickFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
