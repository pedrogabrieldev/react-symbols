import IconTitleFill0Wght100Grad0Opsz48 from '../components/TitleFill0Wght100Grad0Opsz48'
import IconTitleFill0Wght200Grad0Opsz48 from '../components/TitleFill0Wght200Grad0Opsz48'
import IconTitleFill0Wght300Grad0Opsz48 from '../components/TitleFill0Wght300Grad0Opsz48'
import IconTitleFill0Wght400Grad0Opsz48 from '../components/TitleFill0Wght400Grad0Opsz48'
import IconTitleFill0Wght500Grad0Opsz48 from '../components/TitleFill0Wght500Grad0Opsz48'
import IconTitleFill0Wght600Grad0Opsz48 from '../components/TitleFill0Wght600Grad0Opsz48'
import IconTitleFill0Wght700Grad0Opsz48 from '../components/TitleFill0Wght700Grad0Opsz48'
import IconTitleFill1Wght100Grad0Opsz48 from '../components/TitleFill1Wght100Grad0Opsz48'
import IconTitleFill1Wght200Grad0Opsz48 from '../components/TitleFill1Wght200Grad0Opsz48'
import IconTitleFill1Wght300Grad0Opsz48 from '../components/TitleFill1Wght300Grad0Opsz48'
import IconTitleFill1Wght400Grad0Opsz48 from '../components/TitleFill1Wght400Grad0Opsz48'
import IconTitleFill1Wght500Grad0Opsz48 from '../components/TitleFill1Wght500Grad0Opsz48'
import IconTitleFill1Wght600Grad0Opsz48 from '../components/TitleFill1Wght600Grad0Opsz48'
import IconTitleFill1Wght700Grad0Opsz48 from '../components/TitleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTitle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTitleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTitleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTitleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTitleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTitleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTitleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTitleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTitleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTitleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTitleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTitleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTitleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTitleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTitleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
