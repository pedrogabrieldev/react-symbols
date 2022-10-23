import IconNoAdultContentFill0Wght100Grad0Opsz48 from '../components/NoAdultContentFill0Wght100Grad0Opsz48'
import IconNoAdultContentFill0Wght200Grad0Opsz48 from '../components/NoAdultContentFill0Wght200Grad0Opsz48'
import IconNoAdultContentFill0Wght300Grad0Opsz48 from '../components/NoAdultContentFill0Wght300Grad0Opsz48'
import IconNoAdultContentFill0Wght400Grad0Opsz48 from '../components/NoAdultContentFill0Wght400Grad0Opsz48'
import IconNoAdultContentFill0Wght500Grad0Opsz48 from '../components/NoAdultContentFill0Wght500Grad0Opsz48'
import IconNoAdultContentFill0Wght600Grad0Opsz48 from '../components/NoAdultContentFill0Wght600Grad0Opsz48'
import IconNoAdultContentFill0Wght700Grad0Opsz48 from '../components/NoAdultContentFill0Wght700Grad0Opsz48'
import IconNoAdultContentFill1Wght100Grad0Opsz48 from '../components/NoAdultContentFill1Wght100Grad0Opsz48'
import IconNoAdultContentFill1Wght200Grad0Opsz48 from '../components/NoAdultContentFill1Wght200Grad0Opsz48'
import IconNoAdultContentFill1Wght300Grad0Opsz48 from '../components/NoAdultContentFill1Wght300Grad0Opsz48'
import IconNoAdultContentFill1Wght400Grad0Opsz48 from '../components/NoAdultContentFill1Wght400Grad0Opsz48'
import IconNoAdultContentFill1Wght500Grad0Opsz48 from '../components/NoAdultContentFill1Wght500Grad0Opsz48'
import IconNoAdultContentFill1Wght600Grad0Opsz48 from '../components/NoAdultContentFill1Wght600Grad0Opsz48'
import IconNoAdultContentFill1Wght700Grad0Opsz48 from '../components/NoAdultContentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoAdultContent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoAdultContentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoAdultContentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoAdultContentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoAdultContentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoAdultContentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoAdultContentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoAdultContentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoAdultContentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoAdultContentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoAdultContentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoAdultContentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoAdultContentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoAdultContentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoAdultContentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
