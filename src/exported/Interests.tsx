import IconInterestsFill0Wght100Grad0Opsz48 from '../components/InterestsFill0Wght100Grad0Opsz48'
import IconInterestsFill0Wght200Grad0Opsz48 from '../components/InterestsFill0Wght200Grad0Opsz48'
import IconInterestsFill0Wght300Grad0Opsz48 from '../components/InterestsFill0Wght300Grad0Opsz48'
import IconInterestsFill0Wght400Grad0Opsz48 from '../components/InterestsFill0Wght400Grad0Opsz48'
import IconInterestsFill0Wght500Grad0Opsz48 from '../components/InterestsFill0Wght500Grad0Opsz48'
import IconInterestsFill0Wght600Grad0Opsz48 from '../components/InterestsFill0Wght600Grad0Opsz48'
import IconInterestsFill0Wght700Grad0Opsz48 from '../components/InterestsFill0Wght700Grad0Opsz48'
import IconInterestsFill1Wght100Grad0Opsz48 from '../components/InterestsFill1Wght100Grad0Opsz48'
import IconInterestsFill1Wght200Grad0Opsz48 from '../components/InterestsFill1Wght200Grad0Opsz48'
import IconInterestsFill1Wght300Grad0Opsz48 from '../components/InterestsFill1Wght300Grad0Opsz48'
import IconInterestsFill1Wght400Grad0Opsz48 from '../components/InterestsFill1Wght400Grad0Opsz48'
import IconInterestsFill1Wght500Grad0Opsz48 from '../components/InterestsFill1Wght500Grad0Opsz48'
import IconInterestsFill1Wght600Grad0Opsz48 from '../components/InterestsFill1Wght600Grad0Opsz48'
import IconInterestsFill1Wght700Grad0Opsz48 from '../components/InterestsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInterests = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInterestsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInterestsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInterestsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInterestsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInterestsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInterestsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInterestsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInterestsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInterestsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInterestsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInterestsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInterestsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInterestsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInterestsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
