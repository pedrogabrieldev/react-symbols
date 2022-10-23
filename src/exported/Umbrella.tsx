import IconUmbrellaFill0Wght100Grad0Opsz48 from '../components/UmbrellaFill0Wght100Grad0Opsz48'
import IconUmbrellaFill0Wght200Grad0Opsz48 from '../components/UmbrellaFill0Wght200Grad0Opsz48'
import IconUmbrellaFill0Wght300Grad0Opsz48 from '../components/UmbrellaFill0Wght300Grad0Opsz48'
import IconUmbrellaFill0Wght400Grad0Opsz48 from '../components/UmbrellaFill0Wght400Grad0Opsz48'
import IconUmbrellaFill0Wght500Grad0Opsz48 from '../components/UmbrellaFill0Wght500Grad0Opsz48'
import IconUmbrellaFill0Wght600Grad0Opsz48 from '../components/UmbrellaFill0Wght600Grad0Opsz48'
import IconUmbrellaFill0Wght700Grad0Opsz48 from '../components/UmbrellaFill0Wght700Grad0Opsz48'
import IconUmbrellaFill1Wght100Grad0Opsz48 from '../components/UmbrellaFill1Wght100Grad0Opsz48'
import IconUmbrellaFill1Wght200Grad0Opsz48 from '../components/UmbrellaFill1Wght200Grad0Opsz48'
import IconUmbrellaFill1Wght300Grad0Opsz48 from '../components/UmbrellaFill1Wght300Grad0Opsz48'
import IconUmbrellaFill1Wght400Grad0Opsz48 from '../components/UmbrellaFill1Wght400Grad0Opsz48'
import IconUmbrellaFill1Wght500Grad0Opsz48 from '../components/UmbrellaFill1Wght500Grad0Opsz48'
import IconUmbrellaFill1Wght600Grad0Opsz48 from '../components/UmbrellaFill1Wght600Grad0Opsz48'
import IconUmbrellaFill1Wght700Grad0Opsz48 from '../components/UmbrellaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUmbrella = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUmbrellaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUmbrellaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUmbrellaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUmbrellaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUmbrellaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUmbrellaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUmbrellaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUmbrellaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUmbrellaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUmbrellaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUmbrellaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUmbrellaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUmbrellaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUmbrellaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
