import IconRiceBowlFill0Wght100Grad0Opsz48 from '../components/RiceBowlFill0Wght100Grad0Opsz48'
import IconRiceBowlFill0Wght200Grad0Opsz48 from '../components/RiceBowlFill0Wght200Grad0Opsz48'
import IconRiceBowlFill0Wght300Grad0Opsz48 from '../components/RiceBowlFill0Wght300Grad0Opsz48'
import IconRiceBowlFill0Wght400Grad0Opsz48 from '../components/RiceBowlFill0Wght400Grad0Opsz48'
import IconRiceBowlFill0Wght500Grad0Opsz48 from '../components/RiceBowlFill0Wght500Grad0Opsz48'
import IconRiceBowlFill0Wght600Grad0Opsz48 from '../components/RiceBowlFill0Wght600Grad0Opsz48'
import IconRiceBowlFill0Wght700Grad0Opsz48 from '../components/RiceBowlFill0Wght700Grad0Opsz48'
import IconRiceBowlFill1Wght100Grad0Opsz48 from '../components/RiceBowlFill1Wght100Grad0Opsz48'
import IconRiceBowlFill1Wght200Grad0Opsz48 from '../components/RiceBowlFill1Wght200Grad0Opsz48'
import IconRiceBowlFill1Wght300Grad0Opsz48 from '../components/RiceBowlFill1Wght300Grad0Opsz48'
import IconRiceBowlFill1Wght400Grad0Opsz48 from '../components/RiceBowlFill1Wght400Grad0Opsz48'
import IconRiceBowlFill1Wght500Grad0Opsz48 from '../components/RiceBowlFill1Wght500Grad0Opsz48'
import IconRiceBowlFill1Wght600Grad0Opsz48 from '../components/RiceBowlFill1Wght600Grad0Opsz48'
import IconRiceBowlFill1Wght700Grad0Opsz48 from '../components/RiceBowlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRiceBowl = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRiceBowlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRiceBowlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRiceBowlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRiceBowlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRiceBowlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRiceBowlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRiceBowlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRiceBowlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRiceBowlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRiceBowlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRiceBowlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRiceBowlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRiceBowlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRiceBowlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
