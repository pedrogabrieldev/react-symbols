import IconNewspaperFill0Wght100Grad0Opsz48 from '../components/NewspaperFill0Wght100Grad0Opsz48'
import IconNewspaperFill0Wght200Grad0Opsz48 from '../components/NewspaperFill0Wght200Grad0Opsz48'
import IconNewspaperFill0Wght300Grad0Opsz48 from '../components/NewspaperFill0Wght300Grad0Opsz48'
import IconNewspaperFill0Wght400Grad0Opsz48 from '../components/NewspaperFill0Wght400Grad0Opsz48'
import IconNewspaperFill0Wght500Grad0Opsz48 from '../components/NewspaperFill0Wght500Grad0Opsz48'
import IconNewspaperFill0Wght600Grad0Opsz48 from '../components/NewspaperFill0Wght600Grad0Opsz48'
import IconNewspaperFill0Wght700Grad0Opsz48 from '../components/NewspaperFill0Wght700Grad0Opsz48'
import IconNewspaperFill1Wght100Grad0Opsz48 from '../components/NewspaperFill1Wght100Grad0Opsz48'
import IconNewspaperFill1Wght200Grad0Opsz48 from '../components/NewspaperFill1Wght200Grad0Opsz48'
import IconNewspaperFill1Wght300Grad0Opsz48 from '../components/NewspaperFill1Wght300Grad0Opsz48'
import IconNewspaperFill1Wght400Grad0Opsz48 from '../components/NewspaperFill1Wght400Grad0Opsz48'
import IconNewspaperFill1Wght500Grad0Opsz48 from '../components/NewspaperFill1Wght500Grad0Opsz48'
import IconNewspaperFill1Wght600Grad0Opsz48 from '../components/NewspaperFill1Wght600Grad0Opsz48'
import IconNewspaperFill1Wght700Grad0Opsz48 from '../components/NewspaperFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNewspaper = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNewspaperFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNewspaperFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNewspaperFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNewspaperFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNewspaperFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNewspaperFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNewspaperFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNewspaperFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNewspaperFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNewspaperFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNewspaperFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNewspaperFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNewspaperFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNewspaperFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
