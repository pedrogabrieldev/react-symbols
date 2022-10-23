import IconStadiaControllerFill0Wght100Grad0Opsz48 from '../components/StadiaControllerFill0Wght100Grad0Opsz48'
import IconStadiaControllerFill0Wght200Grad0Opsz48 from '../components/StadiaControllerFill0Wght200Grad0Opsz48'
import IconStadiaControllerFill0Wght300Grad0Opsz48 from '../components/StadiaControllerFill0Wght300Grad0Opsz48'
import IconStadiaControllerFill0Wght400Grad0Opsz48 from '../components/StadiaControllerFill0Wght400Grad0Opsz48'
import IconStadiaControllerFill0Wght500Grad0Opsz48 from '../components/StadiaControllerFill0Wght500Grad0Opsz48'
import IconStadiaControllerFill0Wght600Grad0Opsz48 from '../components/StadiaControllerFill0Wght600Grad0Opsz48'
import IconStadiaControllerFill0Wght700Grad0Opsz48 from '../components/StadiaControllerFill0Wght700Grad0Opsz48'
import IconStadiaControllerFill1Wght100Grad0Opsz48 from '../components/StadiaControllerFill1Wght100Grad0Opsz48'
import IconStadiaControllerFill1Wght200Grad0Opsz48 from '../components/StadiaControllerFill1Wght200Grad0Opsz48'
import IconStadiaControllerFill1Wght300Grad0Opsz48 from '../components/StadiaControllerFill1Wght300Grad0Opsz48'
import IconStadiaControllerFill1Wght400Grad0Opsz48 from '../components/StadiaControllerFill1Wght400Grad0Opsz48'
import IconStadiaControllerFill1Wght500Grad0Opsz48 from '../components/StadiaControllerFill1Wght500Grad0Opsz48'
import IconStadiaControllerFill1Wght600Grad0Opsz48 from '../components/StadiaControllerFill1Wght600Grad0Opsz48'
import IconStadiaControllerFill1Wght700Grad0Opsz48 from '../components/StadiaControllerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStadiaController = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStadiaControllerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStadiaControllerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStadiaControllerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStadiaControllerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStadiaControllerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStadiaControllerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStadiaControllerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStadiaControllerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStadiaControllerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStadiaControllerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStadiaControllerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStadiaControllerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStadiaControllerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStadiaControllerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
