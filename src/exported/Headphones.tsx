import IconHeadphonesFill0Wght100Grad0Opsz48 from '../components/HeadphonesFill0Wght100Grad0Opsz48'
import IconHeadphonesFill0Wght200Grad0Opsz48 from '../components/HeadphonesFill0Wght200Grad0Opsz48'
import IconHeadphonesFill0Wght300Grad0Opsz48 from '../components/HeadphonesFill0Wght300Grad0Opsz48'
import IconHeadphonesFill0Wght400Grad0Opsz48 from '../components/HeadphonesFill0Wght400Grad0Opsz48'
import IconHeadphonesFill0Wght500Grad0Opsz48 from '../components/HeadphonesFill0Wght500Grad0Opsz48'
import IconHeadphonesFill0Wght600Grad0Opsz48 from '../components/HeadphonesFill0Wght600Grad0Opsz48'
import IconHeadphonesFill0Wght700Grad0Opsz48 from '../components/HeadphonesFill0Wght700Grad0Opsz48'
import IconHeadphonesFill1Wght100Grad0Opsz48 from '../components/HeadphonesFill1Wght100Grad0Opsz48'
import IconHeadphonesFill1Wght200Grad0Opsz48 from '../components/HeadphonesFill1Wght200Grad0Opsz48'
import IconHeadphonesFill1Wght300Grad0Opsz48 from '../components/HeadphonesFill1Wght300Grad0Opsz48'
import IconHeadphonesFill1Wght400Grad0Opsz48 from '../components/HeadphonesFill1Wght400Grad0Opsz48'
import IconHeadphonesFill1Wght500Grad0Opsz48 from '../components/HeadphonesFill1Wght500Grad0Opsz48'
import IconHeadphonesFill1Wght600Grad0Opsz48 from '../components/HeadphonesFill1Wght600Grad0Opsz48'
import IconHeadphonesFill1Wght700Grad0Opsz48 from '../components/HeadphonesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeadphones = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeadphonesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeadphonesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeadphonesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeadphonesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeadphonesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeadphonesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeadphonesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeadphonesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeadphonesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeadphonesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeadphonesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeadphonesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeadphonesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeadphonesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
