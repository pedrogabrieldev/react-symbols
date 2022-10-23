import IconUTurnLeftFill0Wght100Grad0Opsz48 from '../components/UTurnLeftFill0Wght100Grad0Opsz48'
import IconUTurnLeftFill0Wght200Grad0Opsz48 from '../components/UTurnLeftFill0Wght200Grad0Opsz48'
import IconUTurnLeftFill0Wght300Grad0Opsz48 from '../components/UTurnLeftFill0Wght300Grad0Opsz48'
import IconUTurnLeftFill0Wght400Grad0Opsz48 from '../components/UTurnLeftFill0Wght400Grad0Opsz48'
import IconUTurnLeftFill0Wght500Grad0Opsz48 from '../components/UTurnLeftFill0Wght500Grad0Opsz48'
import IconUTurnLeftFill0Wght600Grad0Opsz48 from '../components/UTurnLeftFill0Wght600Grad0Opsz48'
import IconUTurnLeftFill0Wght700Grad0Opsz48 from '../components/UTurnLeftFill0Wght700Grad0Opsz48'
import IconUTurnLeftFill1Wght100Grad0Opsz48 from '../components/UTurnLeftFill1Wght100Grad0Opsz48'
import IconUTurnLeftFill1Wght200Grad0Opsz48 from '../components/UTurnLeftFill1Wght200Grad0Opsz48'
import IconUTurnLeftFill1Wght300Grad0Opsz48 from '../components/UTurnLeftFill1Wght300Grad0Opsz48'
import IconUTurnLeftFill1Wght400Grad0Opsz48 from '../components/UTurnLeftFill1Wght400Grad0Opsz48'
import IconUTurnLeftFill1Wght500Grad0Opsz48 from '../components/UTurnLeftFill1Wght500Grad0Opsz48'
import IconUTurnLeftFill1Wght600Grad0Opsz48 from '../components/UTurnLeftFill1Wght600Grad0Opsz48'
import IconUTurnLeftFill1Wght700Grad0Opsz48 from '../components/UTurnLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUTurnLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUTurnLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUTurnLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUTurnLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUTurnLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUTurnLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUTurnLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUTurnLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUTurnLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUTurnLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUTurnLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUTurnLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUTurnLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUTurnLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUTurnLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
