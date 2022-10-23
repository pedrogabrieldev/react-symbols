import IconWineBarFill0Wght100Grad0Opsz48 from '../components/WineBarFill0Wght100Grad0Opsz48'
import IconWineBarFill0Wght200Grad0Opsz48 from '../components/WineBarFill0Wght200Grad0Opsz48'
import IconWineBarFill0Wght300Grad0Opsz48 from '../components/WineBarFill0Wght300Grad0Opsz48'
import IconWineBarFill0Wght400Grad0Opsz48 from '../components/WineBarFill0Wght400Grad0Opsz48'
import IconWineBarFill0Wght500Grad0Opsz48 from '../components/WineBarFill0Wght500Grad0Opsz48'
import IconWineBarFill0Wght600Grad0Opsz48 from '../components/WineBarFill0Wght600Grad0Opsz48'
import IconWineBarFill0Wght700Grad0Opsz48 from '../components/WineBarFill0Wght700Grad0Opsz48'
import IconWineBarFill1Wght100Grad0Opsz48 from '../components/WineBarFill1Wght100Grad0Opsz48'
import IconWineBarFill1Wght200Grad0Opsz48 from '../components/WineBarFill1Wght200Grad0Opsz48'
import IconWineBarFill1Wght300Grad0Opsz48 from '../components/WineBarFill1Wght300Grad0Opsz48'
import IconWineBarFill1Wght400Grad0Opsz48 from '../components/WineBarFill1Wght400Grad0Opsz48'
import IconWineBarFill1Wght500Grad0Opsz48 from '../components/WineBarFill1Wght500Grad0Opsz48'
import IconWineBarFill1Wght600Grad0Opsz48 from '../components/WineBarFill1Wght600Grad0Opsz48'
import IconWineBarFill1Wght700Grad0Opsz48 from '../components/WineBarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWineBar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWineBarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWineBarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWineBarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWineBarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWineBarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWineBarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWineBarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWineBarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWineBarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWineBarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWineBarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWineBarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWineBarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWineBarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
