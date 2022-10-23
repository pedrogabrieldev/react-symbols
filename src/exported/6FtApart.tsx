import Icon6FtApartFill0Wght100Grad0Opsz48 from '../components/6FtApartFill0Wght100Grad0Opsz48'
import Icon6FtApartFill0Wght200Grad0Opsz48 from '../components/6FtApartFill0Wght200Grad0Opsz48'
import Icon6FtApartFill0Wght300Grad0Opsz48 from '../components/6FtApartFill0Wght300Grad0Opsz48'
import Icon6FtApartFill0Wght400Grad0Opsz48 from '../components/6FtApartFill0Wght400Grad0Opsz48'
import Icon6FtApartFill0Wght500Grad0Opsz48 from '../components/6FtApartFill0Wght500Grad0Opsz48'
import Icon6FtApartFill0Wght600Grad0Opsz48 from '../components/6FtApartFill0Wght600Grad0Opsz48'
import Icon6FtApartFill0Wght700Grad0Opsz48 from '../components/6FtApartFill0Wght700Grad0Opsz48'
import Icon6FtApartFill1Wght100Grad0Opsz48 from '../components/6FtApartFill1Wght100Grad0Opsz48'
import Icon6FtApartFill1Wght200Grad0Opsz48 from '../components/6FtApartFill1Wght200Grad0Opsz48'
import Icon6FtApartFill1Wght300Grad0Opsz48 from '../components/6FtApartFill1Wght300Grad0Opsz48'
import Icon6FtApartFill1Wght400Grad0Opsz48 from '../components/6FtApartFill1Wght400Grad0Opsz48'
import Icon6FtApartFill1Wght500Grad0Opsz48 from '../components/6FtApartFill1Wght500Grad0Opsz48'
import Icon6FtApartFill1Wght600Grad0Opsz48 from '../components/6FtApartFill1Wght600Grad0Opsz48'
import Icon6FtApartFill1Wght700Grad0Opsz48 from '../components/6FtApartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon6FtApart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon6FtApartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon6FtApartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon6FtApartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon6FtApartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon6FtApartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon6FtApartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon6FtApartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon6FtApartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon6FtApartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon6FtApartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon6FtApartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon6FtApartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon6FtApartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon6FtApartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
