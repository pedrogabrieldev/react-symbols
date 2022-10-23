import IconNaturePeopleFill0Wght100Grad0Opsz48 from '../components/NaturePeopleFill0Wght100Grad0Opsz48'
import IconNaturePeopleFill0Wght200Grad0Opsz48 from '../components/NaturePeopleFill0Wght200Grad0Opsz48'
import IconNaturePeopleFill0Wght300Grad0Opsz48 from '../components/NaturePeopleFill0Wght300Grad0Opsz48'
import IconNaturePeopleFill0Wght400Grad0Opsz48 from '../components/NaturePeopleFill0Wght400Grad0Opsz48'
import IconNaturePeopleFill0Wght500Grad0Opsz48 from '../components/NaturePeopleFill0Wght500Grad0Opsz48'
import IconNaturePeopleFill0Wght600Grad0Opsz48 from '../components/NaturePeopleFill0Wght600Grad0Opsz48'
import IconNaturePeopleFill0Wght700Grad0Opsz48 from '../components/NaturePeopleFill0Wght700Grad0Opsz48'
import IconNaturePeopleFill1Wght100Grad0Opsz48 from '../components/NaturePeopleFill1Wght100Grad0Opsz48'
import IconNaturePeopleFill1Wght200Grad0Opsz48 from '../components/NaturePeopleFill1Wght200Grad0Opsz48'
import IconNaturePeopleFill1Wght300Grad0Opsz48 from '../components/NaturePeopleFill1Wght300Grad0Opsz48'
import IconNaturePeopleFill1Wght400Grad0Opsz48 from '../components/NaturePeopleFill1Wght400Grad0Opsz48'
import IconNaturePeopleFill1Wght500Grad0Opsz48 from '../components/NaturePeopleFill1Wght500Grad0Opsz48'
import IconNaturePeopleFill1Wght600Grad0Opsz48 from '../components/NaturePeopleFill1Wght600Grad0Opsz48'
import IconNaturePeopleFill1Wght700Grad0Opsz48 from '../components/NaturePeopleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNaturePeople = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNaturePeopleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNaturePeopleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNaturePeopleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNaturePeopleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNaturePeopleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNaturePeopleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNaturePeopleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNaturePeopleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNaturePeopleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNaturePeopleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNaturePeopleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNaturePeopleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNaturePeopleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNaturePeopleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
