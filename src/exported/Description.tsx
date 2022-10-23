import IconDescriptionFill0Wght100Grad0Opsz48 from '../components/DescriptionFill0Wght100Grad0Opsz48'
import IconDescriptionFill0Wght200Grad0Opsz48 from '../components/DescriptionFill0Wght200Grad0Opsz48'
import IconDescriptionFill0Wght300Grad0Opsz48 from '../components/DescriptionFill0Wght300Grad0Opsz48'
import IconDescriptionFill0Wght400Grad0Opsz48 from '../components/DescriptionFill0Wght400Grad0Opsz48'
import IconDescriptionFill0Wght500Grad0Opsz48 from '../components/DescriptionFill0Wght500Grad0Opsz48'
import IconDescriptionFill0Wght600Grad0Opsz48 from '../components/DescriptionFill0Wght600Grad0Opsz48'
import IconDescriptionFill0Wght700Grad0Opsz48 from '../components/DescriptionFill0Wght700Grad0Opsz48'
import IconDescriptionFill1Wght100Grad0Opsz48 from '../components/DescriptionFill1Wght100Grad0Opsz48'
import IconDescriptionFill1Wght200Grad0Opsz48 from '../components/DescriptionFill1Wght200Grad0Opsz48'
import IconDescriptionFill1Wght300Grad0Opsz48 from '../components/DescriptionFill1Wght300Grad0Opsz48'
import IconDescriptionFill1Wght400Grad0Opsz48 from '../components/DescriptionFill1Wght400Grad0Opsz48'
import IconDescriptionFill1Wght500Grad0Opsz48 from '../components/DescriptionFill1Wght500Grad0Opsz48'
import IconDescriptionFill1Wght600Grad0Opsz48 from '../components/DescriptionFill1Wght600Grad0Opsz48'
import IconDescriptionFill1Wght700Grad0Opsz48 from '../components/DescriptionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDescription = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDescriptionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDescriptionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDescriptionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDescriptionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDescriptionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDescriptionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDescriptionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDescriptionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDescriptionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDescriptionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDescriptionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDescriptionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDescriptionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDescriptionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
